/*
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using API.Entidades;

namespace API.Persistencia.Configuracion
{
    public class DetalleTicketConfiguracion : IEntityTypeConfiguration<Det_Tick>
    {
    
        public void Configure(EntityTypeBuilder<Det_Tick> builder)
        {
            builder.HasKey(t => new { t.ID_Prod, t.ID_Ticket });
            builder.HasOne(ti => ti.Producto)
                .WithMany()
                .HasForeignKey(ti => ti.ID_Prod);
            builder.HasOne(fe => fe.Ticket)
                .WithMany()
                .HasForeignKey(fe => fe.ID_Ticket);
        }
    }
}
*/