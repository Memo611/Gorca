using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Runtime.InteropServices.JavaScript;

namespace API.Entidades;

public class Productos
{
    [Key]
    public int ID_prod { get; set; }
    public string Marca { get; set; }
    public int Volumen { get; set; }
    public JSType.Date Fecha_max_fresc { get; set; }
    public string Sabor { get; set; }
    [Column(TypeName="money")]
    public decimal Precio { get; set; }
    public string Objeto_impu { get; set; }
    public int Clave_unidad { get; set; }
    public int Clave_prod_serv { get; set; }
    public string Base_manual { get; set; }
    public string Descripcion { get; set; }
    public string Unidad { get; set; }
    public int Stock_min { get; set; }
    public int Stock_max { get; set; }
    public bool Habilitado { get; set; }
}