"use client";

import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { apiPost } from "@/libs/apiClient";
import { PageContainer } from "@/components/ui";

export default function NewProductPage() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    await apiPost("/api/products", formData);
    router.push("/dashboard/products");
  };

  return (
    <PageContainer>
      <ProductForm onSubmit={handleSubmit} isNewProduct />
    </PageContainer>
  );
}
