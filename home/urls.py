from django.urls import  path
from . import views

urlpatterns = [
    path('',views.homeViwe, name='home'),
        path('apply/<int:university_id>/',
    views.apply_view,
    name='apply'
),
]