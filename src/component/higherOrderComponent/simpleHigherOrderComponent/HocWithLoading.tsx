// src/components/withLoading.tsx
import React from "react";

interface HocWithLoadingProps {
  isLoading: boolean;
}

// Generic HOC with proper prop typing
function HocWithLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithLoadingComponent(props: P & HocWithLoadingProps) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return <WrappedComponent {...(restProps as P)} />;
  };
}

export default HocWithLoading;
