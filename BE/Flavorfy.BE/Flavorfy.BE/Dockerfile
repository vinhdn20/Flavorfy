#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["Flavorfy.BE/Flavorfy.BE.csproj", "Flavorfy.BE/"]
COPY ["Domain/Domain.csproj", "Domain/"]
COPY ["Repository/Repository.csproj", "Repository/"]
COPY ["Common/Common.csproj", "Common/"]
COPY ["Services/Services.csproj", "Services/"]
RUN dotnet restore "Flavorfy.BE/Flavorfy.BE.csproj"
COPY . .
WORKDIR "/src/Flavorfy.BE"
RUN dotnet build "Flavorfy.BE.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Flavorfy.BE.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Flavorfy.BE.dll"]