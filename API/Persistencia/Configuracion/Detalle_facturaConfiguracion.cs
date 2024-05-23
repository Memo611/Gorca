
using System.Reflection;
/*
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using API.Entidades;

namespace API.Persistencia.Configuracion
{
public class DetalleFacturaConfiguracion : IEntityTypeConfiguration<Det_Fac>
{
    
    public void Configure(EntityTypeBuilder<Det_Fac> builder)
        {
        builder.HasKey(f => new { f.ID_Prod, f.Folio });
        builder.HasOne(fr => fr.Producto)
            .WithMany()
            .HasForeignKey(fr => fr.ID_Prod);
        builder.HasOne(fe => fe.Facturas)
            .WithMany()
            .HasForeignKey(fe => fe.Folio);
        }
    }
}

*/