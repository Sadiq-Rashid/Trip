
using Microsoft.EntityFrameworkCore;

namespace Trips.Data{

    public class  MyDbContext : DbContext
    {

        public MyDbContext(DbContextOptions<DbContext> options): base(options){}
        public DbSet<Trip> Trips {get;set;}
        

    }

}