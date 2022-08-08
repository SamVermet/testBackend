package com.example.firsttest.controller;

import com.example.firsttest.domain.Product;
import com.example.firsttest.service.ProductService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @RequestMapping(value = "/products", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> getProducts(){
        return this.productService.getProducts();
    }
    @RequestMapping(value = "/products", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Product createProducts(@RequestBody Product product){
        return this.productService.createProducts(product);
    }
    @RequestMapping(value = "/products/{id}", method = RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Product updateProducts(@PathVariable ObjectId id, @RequestBody Product product){
        return this.productService.updateProducts(id, product);
    }
    @RequestMapping(value =  "/products/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Product deleteProducts(@PathVariable ObjectId id){
        productService.deleteProducts(id);
        return null;
    }
    @RequestMapping(value = "/products/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> getProductsByType(@PathVariable String type) {
        return this.productService.getProductsByType(type);
    }
}
