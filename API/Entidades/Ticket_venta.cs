using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Runtime.InteropServices.JavaScript;

namespace API.Entidades;

public class Ticket_venta
{
    [Key]
    public int ID_ticket { get; set; }
    public JSType.Date Fecha_emision { get; set; }
    [Column(TypeName="money")]
    public decimal Subtotal { get; set; }
    public int IVA { get; set; }
    [Column(TypeName="money")]
    public decimal Total { get; set; }
    public bool Habilitado { get; set; }
}