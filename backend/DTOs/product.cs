namespace Backend.DTOs;

public record ProductDot(
    int Id,
    string Name,
    string Description,
    decimal Price,
    string ImageUrl,
    DateOnly ReleaseDate
)
{
    
}