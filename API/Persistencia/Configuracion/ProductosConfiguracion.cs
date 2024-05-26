
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using API.Entidades;

namespace API.Persistencia.Configuracion
{
    public class ProductosConfiguracion : IEntityTypeConfiguration<Producto>
    {
    
        public void Configure(EntityTypeBuilder<Producto> builder)
        {
            builder.HasOne(pr => pr.Proveedores)
                .WithMany()
                .HasForeignKey(pr => pr.ID_Prov);
            builder.HasOne(c => c.Categoria)
                .WithMany()
                .HasForeignKey(c => c.ID_Cat);
            builder
                .HasMany(p => p.Factura)
                .WithMany(f => f.Producto)
                .UsingEntity<Det_Fac>(
                    r => r
                        .HasOne<Factura>(df => df.Factura)
                        .WithMany()
                        .HasForeignKey("Folio")
                        .HasPrincipalKey(nameof(Factura.Folio)),
                    r =>   r
                        .HasOne<Producto>(df => df.Producto)
                        .WithMany()
                        .HasForeignKey("ID_Prod")
                        .HasPrincipalKey(nameof(Producto.ID_Prod)),
                    j =>
                    {
                        j.HasKey(df => new { df.ID_Prod, df.Folio });
                        j.ToTable("Det_Fac");
                    }
                );
            
            builder
                .HasMany(p => p.Ticket)
                .WithMany(f => f.Producto)
                .UsingEntity<Det_Tick>(
                    r => r
                        .HasOne<Ticket>(df => df.Ticket)
                        .WithMany()
                        .HasForeignKey("ID_Ticket")
                        .HasPrincipalKey(nameof(Ticket.ID_Ticket)),
                    r =>   r
                        .HasOne<Producto>(df => df.Producto)
                        .WithMany()
                        .HasForeignKey("ID_Prod")
                        .HasPrincipalKey(nameof(Producto.ID_Prod)),
                    j =>
                    {
                        j.HasKey(df => new { df.ID_Prod, df.ID_Ticket });
                        j.ToTable("Det_Tick");
                    }
                );
        }
    }
}
