using Microsoft.EntityFrameworkCore;
using API.Entidades;

namespace API.Comun.Interfaz
{
    public interface IApliacacionBdContexto
    {
        public DbSet<Categoria> Categoria { get; set; }
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Detalle_factura> DetalleFactura { get; set; }
        public DbSet<Detalle_ticket> DetalleTickets { get; set; }
        public DbSet<Empleado> Empleados { get; set; }
        public DbSet<Factura> Facturas { get; set; }
        public DbSet<GORCA> Gorca { get; set; }
        public DbSet<Productos> Producto { get; set; }
        public DbSet<Proveedores> Proveedor { get; set; }
        public DbSet<Ticket_venta> TicketVentas { get; set; }
        
        Task<int> SaveChangesAsync(CancellationToken cancelacionToken);
        int SaveChanges();
        Task<int> ExecutarSqlComandoAsync(string comandoSql, CancellationToken cancelacionToken);
        Task<int> ExecutarSqlComandoAsync(string comandoSql, IEnumerable<object> parametros, CancellationToken cancelacionToken);
        Task EmpezarTransaccionAsync();
        Task MandarTransaccionAsync();
        void CancelarTransaccion();
    }
}