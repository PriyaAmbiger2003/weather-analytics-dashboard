import requests
from django.http import JsonResponse

def weather_view(request, city):
    api_key = "92cac5c44aa5b4ca9a3b6122fd71bcf2"  #api key
    url = f"https://api.openweathermap.org/data/2.5/forecast?q={city}&units=metric&appid={api_key}"

    try:
        response = requests.get(url)
        data = response.json()

        # Handle invalid city names
        if response.status_code != 200 or "list" not in data:
            return JsonResponse({"error": "City not found or API error"}, status=404)

        # Simplify structure for frontend
        simplified = {
            "city": data["city"]["name"],
            "current": {
                "temp": data["list"][0]["main"]["temp"],
                "humidity": data["list"][0]["main"]["humidity"],
                "wind": data["list"][0]["wind"]["speed"],
                "weather": data["list"][0]["weather"][0]["description"],
            },
            "forecast": [
                {"dt_txt": item["dt_txt"], "temp": item["main"]["temp"]}
                for item in data["list"][:5]
            ],
        }

        return JsonResponse(simplified)

    except Exception as e:
        print("Error fetching weather:", e)
        return JsonResponse({"error": "Internal Server Error"}, status=500)
