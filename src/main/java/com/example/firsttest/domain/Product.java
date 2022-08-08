package com.example.firsttest.domain;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Document(collection = "Product")
public class Product {
    @Id
    private ObjectId id;
    private String name;
    private String price;
    private String type;
}
