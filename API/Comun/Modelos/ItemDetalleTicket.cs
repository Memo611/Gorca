using System.ComponentModel.DataAnnotations.Schema;

namespace API.Comun;

public class ItemDetalleTicket
{
    public int idProd  {get; set; }
    public int idTick  {get; set; }
    public int Cant { get; set; }
    [Column(TypeName="money")]
    public decimal Pmv { get; set; }
    [Column(TypeName="money")]
    public decimal Import { get; set; }
    public decimal Descu { get; set; }
}