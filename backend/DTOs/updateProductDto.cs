namespace UpdateProduct.DTOs;

public record UpdateProductDto(
    string Name,
    string Description,
    decimal Price,
    string ImageUrl,
    DateOnly ReleaseDate
);