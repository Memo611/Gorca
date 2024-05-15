namespace API.Controllers.Entidades;

public class Cliente
{
    public int ID_Cliente { get; set; }
    public string RFC { get; set; }
    public string Razon_social { get; set; }
    public string Regimen_fiscal { get; set; }
    public string Uso_CFDI { get; set; }
    public string Direccion { get; set; }
    public string Telefono { get; set; }
}