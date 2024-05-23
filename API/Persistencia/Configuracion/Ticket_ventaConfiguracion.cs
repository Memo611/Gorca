/*
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
        }
    }
}
*/