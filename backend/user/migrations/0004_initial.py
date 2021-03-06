# Generated by Django 4.0.3 on 2022-04-02 04:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0003_delete_account'),
    ]

    operations = [
        migrations.CreateModel(
            name='ApplicationForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=500)),
                ('city', models.CharField(max_length=20)),
                ('state', models.CharField(max_length=20)),
                ('email_id', models.EmailField(max_length=50)),
                ('phone', models.IntegerField()),
                ('companyName', models.CharField(max_length=50)),
                ('about_background', models.CharField(max_length=500)),
                ('about_company', models.CharField(max_length=500)),
                ('about_problem', models.CharField(max_length=500)),
                ('about_solution', models.CharField(max_length=500)),
                ('about_value_proposition', models.CharField(max_length=500)),
                ('about_competetors', models.CharField(max_length=500)),
                ('about_revenue_modal', models.CharField(max_length=500)),
                ('about_potential', models.CharField(max_length=500)),
                ('about_plan', models.CharField(max_length=500)),
                ('incubation_type', models.CharField(max_length=20)),
                ('aboutBussiness_proposal', models.CharField(max_length=500)),
                ('company_logo', models.ImageField(null=True, upload_to='')),
            ],
        ),
    ]
