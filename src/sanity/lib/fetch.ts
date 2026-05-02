import { sanityClient } from "./client";

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: { revalidate?: number } = {}
): Promise<T> {
  return sanityClient.fetch<T>(query, params, {
    next: { revalidate: options.revalidate ?? 60 },
  });
}
