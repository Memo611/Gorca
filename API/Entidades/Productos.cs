using System.Data.SqlTypes;

namespace API.Controllers.Entidades;

public class Productos
{
    public int ID_prod { get; set; }
    public string Marca { get; set; }
    public int Volumen { get; set; }
    public DateOnly Fecha_mac_fresc { get; set; }
    public string Sabor { get; set; }
    public SqlMoney Precio { get; set; }
    public string Objeto_impu { get; set; }
    public int Clave_unidad { get; set; }
    public int Clave_prod_serv { get; set; }
    public string Base_manual { get; set; }
    public string Descripcion { get; set; }
    public string Unidad { get; set; }
    public int Stock_min { get; set; }
    public int Stock_max { get; set; }
}