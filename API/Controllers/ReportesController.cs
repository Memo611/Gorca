using API.Comun.Interfaz;
using API.Comun.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReportesController : ControllerBase
    {
        private readonly IApliacacionBdContexto _context;

        public ReportesController(IApliacacionBdContexto context)
        {
            _context = context;
        }

        [HttpPost("ventas-por-fecha")]
        public async Task<IActionResult> GetVentasPorFecha([FromBody] ReporteVentasRequest request)
        {
            if (request.FechaInicio > request.FechaFin)
            {
                return BadRequest("La fecha de inicio no puede ser mayor que la fecha de fin.");
            }

            // Obtener las facturas dentro del rango de fechas
            var facturas = await _context.Factura
                .Where(f => f.Fecha_Emision_Fac >= request.FechaInicio && f.Fecha_Emision_Fac <= request.FechaFin)
                .ToListAsync();

            // Agrupar las facturas por semana y calcular el total de ventas por semana
            var ventasPorSemana = facturas
                .GroupBy(f => ISOWeek.GetWeekOfYear(f.Fecha_Emision_Fac))
                .Select(g => new
                {
                    Semana = g.Key,
                    TotalVentas = g.Sum(f => f.Total_Fac)
                })
                .ToList();

            return Ok(ventasPorSemana);
        }
    }
}
