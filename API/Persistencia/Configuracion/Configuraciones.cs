
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using API.Entidades;

namespace API.Persistencia.Configuracion
{
public class FacturaConfiguracion : IEntityTypeConfiguration<Detalle_factura>
{
    
    public void Configure(EntityTypeBuilder<Detalle_factura> builder)
        {
        builder.HasKey(f => new { f.ID_prod, f.Folio });
        builder.HasOne(fr => fr.Productos)
            .WithMany()
            .HasForeignKey(fr => fr.ID_prod);
        }
    }
}

