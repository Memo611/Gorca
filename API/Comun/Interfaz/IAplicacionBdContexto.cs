using Microsoft.EntityFrameworkCore;
using API.Entidades;

namespace API.Comun.Interfaz
{
    public interface IApliacacionBdContexto
    {
       // public DbSet<Categoria> Categoria { get; set; }
        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Empleado> Empleado { get; set; }
        public DbSet<gorca> Gorca { get; set; }
        public DbSet<Proveedores> Proveedores { get; set; }
        public DbSet<Producto> Producto { get; set; }
        public DbSet<Factura> Factura { get; set; }
        public DbSet<Ticket> Ticket { get; set; }
        public DbSet<Det_Fac> DetalleFactura { get; set; }
        /*
        
        public DbSet<Det_Tick> DetalleTickets { get; set; }
        
        
        
        
        
        
        */
        
        Task<int> SaveChangesAsync(CancellationToken cancelacionToken);
        int SaveChanges();
        Task<int> ExecutarSqlComandoAsync(string comandoSql, CancellationToken cancelacionToken);
        Task<int> ExecutarSqlComandoAsync(string comandoSql, IEnumerable<object> parametros, CancellationToken cancelacionToken);
        Task EmpezarTransaccionAsync();
        Task MandarTransaccionAsync();
        void CancelarTransaccion();
    }
}