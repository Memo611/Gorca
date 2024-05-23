
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
        }
    }
}
