using System.ComponentModel.DataAnnotations;

namespace API.Entidades;

public class Cliente
{
    [Key]
    public int ID_Cliente { get; set; }
    public string RFC { get; set; }
    public string Razon_social { get; set; }
    public string Regimen_fiscal { get; set; }
    public string Uso_CFDI { get; set; }
    public string Calle { get; set; }
    public int Numero { get; set; }
    public string Colonia { get; set; }
    public string Ciudad { get; set; }
    public int CP { get; set; }
    public string Pais { get; set; }
    public string Telefono { get; set; }
    public bool Habilitado { get; set; }
}