
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using API.Entidades;

namespace API.Persistencia.Configuracion
{
    public class TicketConfiguracion : IEntityTypeConfiguration<Ticket>
    {
    
        public void Configure(EntityTypeBuilder<Ticket> builder)
        {
            builder.HasOne(t => t.Empleado)
                .WithMany()
                .HasForeignKey(t => t.ID_Emp);
            builder.HasOne(fe => fe.Gorca)
                .WithMany()
                .HasForeignKey(fe => fe.ID_Gorca);
            builder
                .HasMany(p => p.Producto)
                .WithMany(f => f.)
                .UsingEntity<Det_Fac>(
                    r => r
                        .HasOne<Producto>(df => df.Producto)
                        .WithMany()
                        .HasForeignKey("ID_Prod")
                        .HasPrincipalKey(nameof(Producto.ID_Prod)),
                    j => j
                        .HasOne<Factura>(df => df.Factura)
                        .WithMany()
                        .HasForeignKey("Folio")
                        .HasPrincipalKey(nameof(Factura.Folio)),
                    r =>
                    {
                        r.HasKey(df => new { df.ID_Prod, df.Folio });
                        r.ToTable("Det_Fac");
                    }
                );
        }
    }
}
