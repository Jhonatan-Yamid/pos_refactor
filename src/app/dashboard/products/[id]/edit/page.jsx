"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { apiGet, apiPut } from "@/libs/apiClient";
import { PageContainer } from "@/components/ui";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    apiGet(`/api/products?id=${id}`).then(setProduct);
  }, [id]);

  const handleSubmit = async (formData) => {
    await apiPut("/api/products", { ...formData, id: parseInt(id) });
    router.push("/dashboard/products");
  };

  if (!product) {
    return (
      <PageContainer>
        <p className="text-content-muted">Cargando...</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ProductForm initialData={product} onSubmit={handleSubmit} />
    </PageContainer>
  );
}
