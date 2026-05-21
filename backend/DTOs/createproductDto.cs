namespace Products.DTOs;

    public record createProductDto(
        string Name,
        string Description,
        decimal Price,
        string ImageUrl,
        DateOnly ReleaseDate
    );