/*
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using API.Entidades;

namespace API.Persistencia.Configuracion
{
    public class FacturaConfiguracion : IEntityTypeConfiguration<Factura>
    {
    
        public void Configure(EntityTypeBuilder<Factura> builder)
        {
            builder.HasOne(fr => fr.Clientes)
                .WithMany()
                .HasForeignKey(fr => fr.ID_Cli);
            builder.HasOne(fe => fe.Gorca)
                .WithMany()
                .HasForeignKey(fe => fe.ID_Gorca);
        }
    }
}
*/