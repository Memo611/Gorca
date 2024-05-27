
using System.Reflection;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using API.Entidades;

namespace API.Persistencia.Configuracion
{
    public class DetalleFacturaConfiguracion : IEntityTypeConfiguration<Det_Fac>
    {

        public void Configure(EntityTypeBuilder<Det_Fac> builder)
        {

        }
    }
}

