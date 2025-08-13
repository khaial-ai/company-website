import Layout from "@components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <main className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
          <p className="text-gray-600">The page you’re looking for doesn’t exist.</p>
        </div>
      </main>
    </Layout>
  );
}

