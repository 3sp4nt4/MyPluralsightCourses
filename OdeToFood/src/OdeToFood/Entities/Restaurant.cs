namespace OdeToFood.Entities
{
    public enum CuisineType
    {
        None = 0,
        Italian = 1,
        French = 2,
        American = 3 
    }

    public class Restaurant
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public CuisineType Cuisine { get; set; }
    }
}
