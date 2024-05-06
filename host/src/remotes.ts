export type Remote = {
  name: string;
  entry: string;
  alias: string;
};

export const remotes: Remote[] = await fetch(
  "http://localhost:2222/remotes.json"
).then((r) => r.json());
