from django.urls import path, include
from . import views

urlpatterns = [
    path('getprice', views.get_trip_price),
    path('book', views.book_trip),
    path('loadlocation', views.loadLocations),
    path('history', views.get_trip_history),
    path('payment/pay', views.pay_trip),
    path('locations', views.get_trip_locations),
  
   
]
