import { loadRemote } from "@module-federation/enhanced/runtime";
import { Suspense, lazy, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  path: string;
};

const AppError = () => (
  <div>
    <p>Something went wrong</p>
    <button onClick={() => window.location.reload()}>Retry</button>
  </div>
);

const RemoteComponent = ({ path }: Props) => {
  const Component = useMemo(
    () =>
      lazy(async () => {
        try {
          return (await loadRemote(path)) as any;
        } catch (e) {
          return Promise.resolve({ default: AppError });
        }
      }),
    [path]
  );

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

export default RemoteComponent;
