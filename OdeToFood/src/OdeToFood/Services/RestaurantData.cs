using System.Collections.Generic;
using OdeToFood.Entities;
using System.Linq;

namespace OdeToFood.Services
{
    public interface IRestaurantData
    {
        IEnumerable<Restaurant> GetAll();

        Restaurant Get(int id);

        void Add(Restaurant newRestaurant);

        int Commit();
    }

    public class SqlRestaurantData : IRestaurantData
    {
        private readonly OdeToFoodDbContext _context;

        public SqlRestaurantData(OdeToFoodDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Restaurant> GetAll()
        {
            return _context.Restaurants.ToList();
        }

        public Restaurant Get(int id)
        {
            return _context.Restaurants.FirstOrDefault(o => o.Id == id);
        }

        public void Add(Restaurant newRestaurant)
        {
            _context.Add(newRestaurant);
            _context.SaveChanges();
        }

        public int Commit()
        {
            return _context.SaveChanges();
        }
    }

    public class InMemoryRestaurantData : IRestaurantData
    {
        private static List<Restaurant> _restaurants;

        public InMemoryRestaurantData()
        {
            if (_restaurants == null || _restaurants.Count == 0)
            {
                _restaurants = new List<Restaurant>
                {
                    new Restaurant {Id = 1, Name = "Tersiguel's"},
                    new Restaurant {Id = 2, Name = "LJ's and the Kat"},
                    new Restaurant {Id = 3, Name = "King's Contrivance"}
                };
            }
        }

        public IEnumerable<Restaurant> GetAll()
        {
            return _restaurants;
        }

        public Restaurant Get(int id)
        {
            return _restaurants.FirstOrDefault(o => o.Id == id);
        }

        public void Add(Restaurant newRestaurant)
        {
            newRestaurant.Id = _restaurants.Max(o => o.Id) + 1;
            _restaurants.Add(newRestaurant);
        }

        public int Commit()
        {
            return 0;
        }
    }
}