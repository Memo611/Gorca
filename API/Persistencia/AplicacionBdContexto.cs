using API.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System.Reflection;
using System.Data;
using API.Comun.Interfaz;

namespace API.Persistencia
{
    public class AplicacionBdContexto : DbContext, IApliacacionBdContexto
    {
        private IDbContextTransaction _actualTransaccion;
        public AplicacionBdContexto(DbContextOptions opciones) : base(opciones)
        {
        }

       // public DbSet<Categoria> Categoria { get; set; }
        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Empleado> Empleado { get; set; }
        public DbSet<gorca> Gorca { get; set; }
        public DbSet<Proveedores> Proveedores { get; set; }
        public DbSet<Producto> Producto { get; set; }
        public DbSet<Factura> Factura { get; set; }
        public DbSet<Ticket> Ticket { get; set; }
        public DbSet<Det_Fac> DetalleFactura { get; set; }
        public DbSet<Det_Tick> DetalleTickets { get; set; }
        
       
        
        
        
        
        public override async Task<int> SaveChangesAsync(CancellationToken cancelacionToken = default)
        {
            var resultado = await base.SaveChangesAsync(cancelacionToken);

            return resultado;
        }

        public async Task EmpezarTransaccionAsync()
        {
            if (_actualTransaccion != null)
            {
                return;
            }

            _actualTransaccion = await base.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted)
                .ConfigureAwait(false);
        }

        public async Task MandarTransaccionAsync()
        {
            try
            {
                await SaveChangesAsync().ConfigureAwait(false);

                _actualTransaccion?.Commit();
            }
            catch
            {
                CancelarTransaccion();
                throw;
            }
            finally
            {
                if (_actualTransaccion != null)
                {
                    _actualTransaccion.Dispose();
                    _actualTransaccion = null;
                }
            }
        }

        public void CancelarTransaccion()
        {
            try
            {
                _actualTransaccion?.Rollback();
            }
            finally
            {
                if (_actualTransaccion != null)
                {
                    _actualTransaccion.Dispose();
                    _actualTransaccion = null;
                }
            }
        }

        public async Task<int> ExecutarSqlComandoAsync(string comandoSql, CancellationToken cancelacionToken)
        {
            return await base.Database.ExecuteSqlRawAsync(comandoSql, cancelacionToken);
        }

        public async Task<int> ExecutarSqlComandoAsync(string comandoSql, IEnumerable<object> parametros, CancellationToken cancelacionToken)
        {
            return await base.Database.ExecuteSqlRawAsync(comandoSql, parametros, cancelacionToken);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(builder);

        }
    }
}