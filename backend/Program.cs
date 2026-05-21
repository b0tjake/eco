using Backend.DTOs;
using Products.DTOs;
using UpdateProduct.DTOs;

// const string EndPointName = "GetProducts";
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<ProductDot> products =[
new (
    1,
    "Product 1",
    "Description for Product 1",
    19.99m,
    "https://example.com/product1.jpg",
    new DateOnly(2024, 6, 1)
),
new(
    2,
    "Product 2",
    "Description for Product 2",
    29.99m,
    "https://example.com/product2.jpg",
    new DateOnly(2024, 6, 2)
),
new(
    3,
    "Product 3",
    "Description for Product 3",
    39.99m,
    "https://example.com/product3.jpg",
    new DateOnly(2024, 6, 3)
),
new(
    4,
    "Product 4",
    "Description for Product 4",
    49.99m,
    "https://example.com/product4.jpg",
    new DateOnly(2024, 6, 4)
)
];
app.MapGet("/products", () => products);
// GET /PRODUCTS/1

app.MapGet("/products/{id}", (int id) => products.Find(product=>product.Id == id))
.WithName("GetProductById");
app.MapPost("/products", (createProductDto newProduct)=>
{
    ProductDot product = new(
        products.Count + 1,
        newProduct.Name,
        newProduct.Description,
        newProduct.Price,
        newProduct.ImageUrl,
        newProduct.ReleaseDate
    );
    products.Add(product);
    return Results.CreatedAtRoute("GetProductById", new{id = product.Id}, product);
});

    //put /products/1
    app.MapPut("/product/{id}", (int id, UpdateProductDto updateProduct) =>
    {
        var index = products.FindIndex(product => product.Id == id);
        if(index == -1)
        {
            return Results.NotFound();
        }
        products[index] = new ProductDot(
            id,
            updateProduct.Name,
            updateProduct.Description,
            updateProduct.Price,
            updateProduct.ImageUrl,
            updateProduct.ReleaseDate
        );
        return Results.NoContent();
    });

app.Run();

