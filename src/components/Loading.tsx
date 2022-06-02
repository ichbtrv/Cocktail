import React from 'react';

import LoadingStyles from './Loading.module.css';

interface Props {
  active: boolean;
}
export default function Loading({ active }: Props) {
  const classNames = [LoadingStyles.loading];
  if (active) {
    classNames.push(LoadingStyles['loading--active']);
  }

  return (
    <div className={`${classNames.join(' ')} w-16`}>
      {active && (
        <svg viewBox="0 0 105 105">
          <circle cx="12.5" cy="12.5" r="12.5">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              dur="1s"
              values="1;.2;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="12.5" cy="52.5" r="12.5" fillOpacity=".5">
            <animate
              attributeName="fill-opacity"
              begin="100ms"
              dur="1s"
              values="1;.2;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="52.5" cy="12.5" r="12.5">
            <animate
              attributeName="fill-opacity"
              begin="300ms"
              dur="1s"
              values="1;.2;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="52.5" cy="52.5" r="12.5">
            <animate
              attributeName="fill-opacity"
              begin="600ms"
              dur="1s"
              values="1;.2;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="92.5" cy="12.5" r="12.5">
            <animate
              attributeName="fill-opacity"
              begin="800ms"
              dur="1s"
              values="1;.2;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="92.5" cy="52.5" r="12.5">
            <animate
              attributeName="fill-opacity"
              begin="400ms"
              dur="1s"
              values="1;.2;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="12.5" cy="92.5" r="12.5">
            <animate
              attributeName="fill-opacity"
              begin="700ms"
              dur="1s"
              values="1;.2;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="52.5" cy="92.5" r="12.5">
            <animate
              attributeName="fill-opacity"
              begin="500ms"
              dur="1s"
              values="1;.2;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="92.5" cy="92.5" r="12.5">
            <animate
              attributeName="fill-opacity"
              begin="200ms"
              dur="1s"
              values="1;.2;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      )}
    </div>
  );
}
