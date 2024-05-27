
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using API.Entidades;

namespace API.Persistencia.Configuracion
{
    public class DetalleTicketConfiguracion : IEntityTypeConfiguration<Det_Tick>
    {
    
        public void Configure(EntityTypeBuilder<Det_Tick> builder)
        {
            
        }
    }
}
