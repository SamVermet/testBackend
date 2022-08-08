package com.example.firsttest.repos;


import com.example.firsttest.domain.Product;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product, ObjectId> {

    List<Product> findAllByType(String type);

   // Product delete(ObjectId id);
}
