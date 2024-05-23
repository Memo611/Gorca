/*
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace API.Entidades;

public class Det_Fac
{
    public int Cantidad_Fac { get; set; }
    [Column(TypeName="money")]
    public decimal PMV_Fac { get; set; }
    [Column(TypeName="money")]
    public decimal Importe_Fac { get; set; }
    public decimal Descuento_Fac { get; set; }
    
    public bool Habilitado { get; set; }
    
    //LLAVES FORANEAS
    public int Folio { get; set; }
    public int ID_Prod { get; set; }
    public ICollection<Producto> Producto { get; set; }
    public ICollection<Factura> Facturas { get; set; }

}
*/