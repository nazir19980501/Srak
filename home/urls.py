from django.urls import  path
from . import views

urlpatterns = [
    path('',views.homeViwe, name='home'),
    path(
    'university/<int:pk>/',
    views.university_detail,
    name='university_detail'
),

path(
    'apply/<int:university_id>/',
    views.apply_view,
    name='apply'
),
]


