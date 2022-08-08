package com.example.firsttest.service;

import com.example.firsttest.domain.Product;
import com.example.firsttest.repos.ProductRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    private List<Product> productList = new ArrayList<>();

    public ProductService() {
    }

    public List<Product> getProducts() {
        // return productList;
        return this.productRepository.findAll();
    }

    public Product createProducts(Product product) {
        return this.productRepository.save(product);
    }

    public Product updateProducts(ObjectId id, Product product) {
        for (Product pr : productList) {
            if (pr.getId().equals(id)) {
                pr.setName(product.getName());
                pr.setPrice(product.getPrice());
                pr.setType(product.getType());
            }
        }
        return this.productRepository.save(product);
    }

    public Product getProductsById(String id) {
        for (Product pr : productList) {
            if (pr.getId().equals(id)) {
                return pr;
            }
        }
        return null;
    }

//    public List<Product> deleteProducts(ObjectId id) {
//        this.productRepository.delete(id);
//        return null;
//    }

    public List<Product> getProductsByType(String type) {
        return this.productRepository.findAllByType(type);
    }
}