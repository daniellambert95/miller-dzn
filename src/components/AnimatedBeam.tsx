"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  startYOffset?: number;
  endYOffset?: number;
  curvature?: number;
  reverse?: boolean;
  beamColor?: string;
  beamSize?: number;
  animationDuration?: number;
  beamOpacity?: number;
}

export const AnimatedBeam = ({
  containerRef,
  fromRef,
  toRef,
  startYOffset = 0,
  endYOffset = 0,
  curvature = 25,
  reverse = false,
  beamColor = "rgba(255, 255, 255, 0.8)",
  beamSize = 3,
  animationDuration = 3,
  beamOpacity = 0.7
}: AnimatedBeamProps) => {
  const particleRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState<string>("");
  const [pathLength, setPathLength] = useState<number>(0);
  
  // Calculate the path between the two elements
  useEffect(() => {
    if (!containerRef.current || !fromRef.current || !toRef.current) return;

    const updatePath = () => {
      const fromRect = fromRef.current!.getBoundingClientRect();
      const toRect = toRef.current!.getBoundingClientRect();
      const containerRect = containerRef.current!.getBoundingClientRect();

      // Calculate positions relative to the container
      const fromX = fromRect.left - containerRect.left + fromRect.width / 2;
      const fromY = fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
      
      const toX = toRect.left - containerRect.left + toRect.width / 2;
      const toY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

      // Calculate control point for the curve
      const controlX = (fromX + toX) / 2;
      const controlY = ((fromY + toY) / 2) - curvature;

      // Create a SVG path
      const svgPath = `M ${fromX},${fromY} Q ${controlX},${controlY} ${toX},${toY}`;
      
      // Create a temporary SVG to calculate the path length
      const tempSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      tempSvg.style.visibility = "hidden";
      tempSvg.style.position = "absolute";
      document.body.appendChild(tempSvg);
      
      const tempPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      tempPath.setAttribute("d", svgPath);
      tempSvg.appendChild(tempPath);
      
      const length = tempPath.getTotalLength();
      document.body.removeChild(tempSvg);
      
      setPath(svgPath);
      setPathLength(length);
    };

    updatePath();

    // Update on resize
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [containerRef, fromRef, toRef, startYOffset, endYOffset, curvature]);

  // Animation effect
  useEffect(() => {
    if (!particleRef.current || !path) return;

    const animateParticle = () => {
      if (!particleRef.current) return;
      const particle = particleRef.current;

      // Create animation that runs once
      const animation = particle.animate(
        [
          { 
            offsetDistance: reverse ? "100%" : "0%",
            opacity: beamOpacity 
          },
          { 
            offsetDistance: reverse ? "0%" : "100%",
            opacity: beamOpacity 
          }
        ],
        {
          duration: animationDuration * 1000,
          iterations: 1,
          easing: "cubic-bezier(0.05, 0.3, 0.1, 1.0)",
          fill: "forwards"
        }
      );

      // After animation completes, wait and then restart
      const restartAnimation = () => {
        // Reset position before starting again (needed for clean restart)
        particle.style.offsetDistance = reverse ? "100%" : "0%";
        
        // Wait for the remaining time to complete a 6-second cycle
        const waitTime = 6000 - (animationDuration * 1000);
        
        setTimeout(() => {
          animation.cancel();
          animation.play();
          
          // Set up next cycle
          animation.onfinish = restartAnimation;
        }, waitTime);
      };

      // Set up the first cycle completion
      animation.onfinish = restartAnimation;
    };

    animateParticle();

    // Cleanup animation when component unmounts
    return () => {
      if (particleRef.current) {
        const animations = particleRef.current.getAnimations();
        animations.forEach(animation => animation.cancel());
      }
    };
  }, [path, reverse, animationDuration, beamOpacity]);

  if (!path) return null;

  return (
    <div className="absolute inset-0 overflow-visible pointer-events-none">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ overflow: "visible" }}
      >
        <path
          d={path}
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth={beamSize / 2}
          style={{
            filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
          }}
        />
      </svg>
      
      <div
        ref={particleRef}
        style={{
          position: "absolute",
          width: `${beamSize * 5}px`,
          height: `${beamSize}px`,
          borderRadius: "50px",
          background: beamColor,
          offsetPath: `path("${path}")`,
          offsetRotate: "0deg",
          boxShadow: `0 0 10px 5px ${beamColor}`,
          filter: "blur(2px)",
          zIndex: 10
        }}
      />
    </div>
  );
}; 