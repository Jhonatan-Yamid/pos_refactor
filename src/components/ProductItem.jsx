"use client";

import { Trash2 } from "lucide-react";
import { Card } from "@/components/ui";

function ProductItem({ product, onEdit, onDelete }) {
  return (
    <Card className="relative hover:border-border-hover transition">
      <div className="flex flex-col pr-6">
        <h2
          className="text-lg font-semibold cursor-pointer hover:underline"
          onClick={() => onEdit(product)}
        >
          {product.name}
        </h2>
        {product.description && <p className="text-sm text-content-muted">{product.description}</p>}
        <p className="text-sm mt-1 font-medium text-success">
          ${product.price?.toFixed(2)} – {product.category}
        </p>
      </div>

      <Trash2
        size={18}
        className="absolute top-5 right-5 cursor-pointer text-content-muted hover:text-danger"
        onClick={() => onDelete(product.id)}
      />
    </Card>
  );
}

export default ProductItem;
