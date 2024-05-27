using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices.JavaScript;

namespace API.Comun;

public class ItemProducto
{
    public int idProd { get; set; }
    public string Marc { get; set; }
    public int Vol { get; set; }
    public DateTime FecFresc { get; set; }
    public string Sabo { get; set; }
    public int Sku { get; set; }
    [Column(TypeName="money")]
    public decimal Prec { get; set; }
    public string ObjImpu { get; set; }
    public int ClavUni { get; set; }
    public int ClavProd { get; set; }
    public string BaseMan { get; set; }
    public string Desc { get; set; }
    public int Existencia { get; set; }
    public int StockMin { get; set; }
    public int StockMax { get; set; }
}