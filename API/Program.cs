using API.Comun.Interfaz;
using API.Persistencia;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<AplicacionBdContexto>(op => op.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConexion")));
builder.Services.AddScoped<IApliacacionBdContexto>(prov => prov.GetService<AplicacionBdContexto>());

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configurar pol�ticas CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("PoliticasCors", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod() .AllowAnyHeader(); 
    });
});

builder.Services.AddSwaggerGen();
var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

// Habilitar CORS
app.UseCors("PoliticasCors");


app.UseAuthorization();

app.MapControllers();

app.Run();
