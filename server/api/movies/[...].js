export default defineEventHandler((event) => {
  const id = [...event.node.req.url.split('/')].pop();
  const config = useRuntimeConfig();
  return $fetch(`${config.apiBaseUrl}/movie/${id}/api_key=${config.apiKey}`, {
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
    },
  });
});