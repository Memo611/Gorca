using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;

namespace API.Entidades;

public class Detalle_ticket
{
    public int ID_ticket { get; set; }
    public int ID_prod { get; set; }
    public int Cantidad { get; set; }
    [Column(TypeName="money")]
    public decimal PMV { get; set; }
    [Column(TypeName="money")]
    public decimal Importe { get; set; }
    public int Descuento { get; set; }
    public bool Habilitado { get; set; }
}